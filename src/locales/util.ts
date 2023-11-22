function loadResources() {
  const modules: Record<string, { default: unknown }> = import.meta.glob("./*/*.json", { eager: true });
  const resources: Record<string, unknown> = {};
  for (const [path, module] of Object.entries(modules)) {
    const [, lang, file] = path.split("/");
    const [ns] = file.split(".");
    resources[lang] = {
      [ns]: module.default,
    };
  }
  return resources;
}

export const resources = loadResources();
