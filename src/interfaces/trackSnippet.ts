interface TrackSnippet {
  snippet: {
    snippet_id: number;
    snippet_language: string;
    restricted: number;
    instrumental: number;
    snippet_body: string;
    script_tracking_url: string;
    pixel_tracking_url: string;
    html_tracking_url: string;
    updated_time: string;
  };
}

export { TrackSnippet };
