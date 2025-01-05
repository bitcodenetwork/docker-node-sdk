export interface PluginQuery {
  filters?: PluginFilter;
}

export interface PluginFilter {
  capability?: string[];
  enable?: string[];
}