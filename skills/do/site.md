# Public Website

Default directory: `docs/site/`

Builds and maintains a static website for the project, deployed to GitHub Pages.

Offer the user 3 site generator options:

- Astro Starlight (default)
- VitePress (if in the vite ecosystem already)
- Docusaurus

## Create

Websearch for modern best practices for that generator. List some options for common plugin integrations that might be useful for their project.

Create an automated github workflow that builds the site and deploys it to GitHub Pages. If they have the GitHub CLI installed, you can use the `gh` command to set the site up for them.

Scan the project and develop a list of pages that would be useful to include in the site.

Propose a list of pages/sections. Ask for feedback and refine the list.

### Example site sections

- Getting Started
- Installation
- Features
- Usage
- References / API
- FAQ

## Update

Update the site with the latest changes from the project as new features get added

If project features get added, search for ecosystem plugins that would integrate well with the feature. Example: HTTP API was added, there might be an OpenAPI plugin that can generate API docs automatically for the site
