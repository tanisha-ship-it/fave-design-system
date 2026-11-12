// Read-only Figma scan used for figma-index/ (8 Nov 2026). Paste into the Figma MCP use_figma tool, one file per call.
// Returns pages, top-level sections with node ids, local components, text styles and fonts used, colours, radii and instance counts.

const t0 = Date.now();
const SKIP = /archive|graveyard|ignore|\bold\b|deprecated|rough|scratch|🗑|❌/i;
const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
const inc = (m, k, n = 1) => { m[k] = (m[k] || 0) + n; };
const top = (m, n) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => k + '×' + v).join(', ');
const out = { file: figma.root.name, pages: [] };
// local assets
const vcols = await figma.variables.getLocalVariableCollectionsAsync();
out.varCollections = vcols.map(c => c.name + '(' + c.variableIds.length + ')').join(', ');
out.textStyles = (await figma.getLocalTextStylesAsync()).map(s => s.name).join(', ').slice(0, 600);
out.paintStyles = (await figma.getLocalPaintStylesAsync()).length;
out.effectStyles = (await figma.getLocalEffectStylesAsync()).map(s => s.name).join(', ').slice(0, 300);
const colors = {}, fonts = {}, tstyles = {}, inst = {}, radii = {}, comps = [], styleNames = {};
let textCount = 0, budgetHit = false;
for (const page of figma.root.children) {
  const p = { name: page.name, id: page.id };
  if (SKIP.test(page.name) || Date.now() - t0 > 45000) { p.skipped = true; budgetHit = budgetHit || Date.now() - t0 > 45000; out.pages.push(p); continue; }
  await figma.setCurrentPageAsync(page);
  const tops = page.children;
  const tl = [];
  for (const n of tops) {
    if (n.type === 'SECTION' || n.type === 'FRAME' || n.type === 'COMPONENT_SET' || n.type === 'COMPONENT') {
      let label = n.name.slice(0, 50);
      if (n.type === 'SECTION') label = '§' + label + '[' + n.children.length + ']{' + n.id + '}';
      else label += '{' + n.id + '}';
      tl.push(label);
    }
  }
  p.top = tl.slice(0, 30).join(' | ') + (tl.length > 30 ? ' …+' + (tl.length - 30) : '');
  p.screens = page.findAllWithCriteria({ types: ['FRAME'] }).filter(f => Math.abs(f.width - 393) < 20 || Math.abs(f.width - 375) < 3 || Math.abs(f.width - 360) < 3).filter(f => f.height > 600).length;
  for (const c of page.findAllWithCriteria({ types: ['COMPONENT_SET', 'COMPONENT'] })) {
    if (c.type === 'COMPONENT' && c.parent && c.parent.type === 'COMPONENT_SET') continue;
    let props = '';
    if (c.type === 'COMPONENT_SET') props = Object.entries(c.componentPropertyDefinitions).filter(([k, d]) => d.type === 'VARIANT').map(([k, d]) => k + ':' + d.variantOptions.join('/')).join('; ');
    comps.push(c.name.slice(0, 60) + (props ? ' [' + props.slice(0, 160) + ']' : '') + ' {' + c.id + '}');
  }
  for (const t of page.findAllWithCriteria({ types: ['TEXT'] })) {
    textCount++;
    if (textCount > 20000) break;
    const f = t.fontName, s = t.fontSize;
    if (f !== figma.mixed && s !== figma.mixed) inc(fonts, f.family + ' ' + f.style + ' ' + s);
    const sid = t.textStyleId;
    if (sid && sid !== figma.mixed) inc(tstyles, sid); else inc(tstyles, 'none');
    if (Array.isArray(t.fills) && t.fills[0] && t.fills[0].type === 'SOLID') inc(colors, 'T' + hex(t.fills[0].color));
  }
  let shapes = 0;
  for (const n of page.findAllWithCriteria({ types: ['FRAME', 'RECTANGLE', 'INSTANCE', 'COMPONENT'] })) {
    if (++shapes > 40000) break;
    if (n.type === 'INSTANCE') inc(inst, n.name.slice(0, 40));
    if (Array.isArray(n.fills)) for (const fl of n.fills) if (fl.type === 'SOLID' && fl.visible !== false) inc(colors, 'F' + hex(fl.color));
    if (Array.isArray(n.strokes) && n.strokes.length && n.strokes[0].type === 'SOLID') inc(colors, 'S' + hex(n.strokes[0].color));
    if (typeof n.cornerRadius === 'number' && n.cornerRadius > 0) inc(radii, n.cornerRadius);
  }
  out.pages.push(p);
}
for (const sid of Object.keys(tstyles)) { if (sid === 'none') continue; try { const st = await figma.getStyleByIdAsync(sid); styleNames[sid] = st ? (st.remote ? '' : 'local:') + st.name : '?'; } catch (e) { styleNames[sid] = '?'; } }
const ts = {}; for (const [k, v] of Object.entries(tstyles)) inc(ts, k === 'none' ? 'NONE' : styleNames[k] || '?', v);
out.textNodes = textCount;
out.textStylesUsed = top(ts, 30);
out.fontsUsed = top(fonts, 30);
const tc = {}, fc = {}, sc = {}; for (const [k, v] of Object.entries(colors)) (k[0] === 'T' ? tc : k[0] === 'F' ? fc : sc)[k.slice(1)] = v;
out.textColors = top(tc, 15); out.fillColors = top(fc, 25); out.strokeColors = top(sc, 12);
out.radii = top(radii, 12);
out.instancesUsed = top(inst, 60);
out.components = comps.slice(0, 120).join('\n') + (comps.length > 120 ? '\n…+' + (comps.length - 120) : '');
out.componentCount = comps.length;
out.ms = Date.now() - t0; out.budgetHit = budgetHit;
return out;
