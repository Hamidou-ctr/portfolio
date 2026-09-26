export interface Project {
  readonly name: string;
  readonly tags: readonly string[];
  readonly description: string;
  readonly liveUrl: string;
  /** Omit for projects whose source code is not publicly accessible. */
  readonly githubUrl?: string;
  /** Path to a preview image/illustration for this project, if one exists. */
  readonly previewSrc?: string;
}
