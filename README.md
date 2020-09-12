# Sanity Plugin IIIF Manifest Input

Display colors for editors to choose from with this custom input component.

## Installation

1. `sanity install iiif-manifest-input`
2. In your schema:

```js
...,
{
  title: "IIIF Manifest",
  description: "URL to the manifest",
  name: "iiifManifest",
  type: "iiifManifest", // required
},
...
```
