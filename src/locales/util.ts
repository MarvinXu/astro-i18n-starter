function loadResources() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const modules = import.meta.glob("./*/*.json", { eager: true }) as Record<string, { default: unknown }>;
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
