# Sanity Plugin IIIF Manifest Input

Add a IIIF viewer for IIIF Manifest urls-

## Installation

1. `sanity install iiif-manifest-input`
2. In your schema:

```js
...,
{
  title: "IIIF Manifest",
  description: "URL to the manifest",
  name: "iiifManifest",
  type: "iiifManifest", // <- The important part
},
...
```
