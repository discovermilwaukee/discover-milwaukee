// Small accessibility helpers shared by the nav, the main site component and a few pages.

// Keyboard support for an element that acts like a button but is not a <button>:
//   <div role="button" tabIndex={0} onClick={fn} onKeyDown={onActivate(fn)}>
export function onActivate(fn) {
  return (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn(e);
    }
  };
}

// Keep Tab / Shift+Tab inside a dialog. Use as onKeyDown on the dialog element.
export function trapTab(e) {
  if (e.key !== "Tab") return;
  const nodes = e.currentTarget.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
