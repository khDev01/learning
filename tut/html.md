back to [homepage](../README.md)

Types of headers
```
<h1> Header 1 </h1>
<h3> Header 3 </h3>
<h6> Header 6 </h6>
```

`<p> paragraph </p>`

~~
`<!DOCTYPE html> ` Defines document type


```
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Document Title</title>
  </head>    
```

#### HTML document content


```
  <body>
```

content sectioning

```
<address class="">
  <!-- Contact info  -->
</address>
```

```
<article class="">
  <!-- self contained composition-->
</article>
```

```
<aside class="">
  <!-- indirectly related to main content -->
</aside>

```
HTML - HyperText Markup Language
HTML is the standard markup language for web pages. 
Describes the structure of a web page. Used to add content such as text, graphics and other media. Uses tags; opening tags <element> and closing tags </element> e.g. the <p> tag defines a paragraph. Attributes define additional information e.g a link has a ‘href’ attribute to define the link.

<!DOCTYPE html> - Defines document type
HTML5 standard encompasses HTML, CSS and JS

Manifest file - what system must have before it can run app- permissions

Steps in creating a packaged app:
Planning
Design UI
update manifest
Code 
Build 
Test and debug - refine app 
Package  - 
Validate - everything is correct
Deploy - Deployment package - normally a ZIP file
Debugging and testing - Ensure apps run reliably and error-free
Debugging - process of detecting, finding and correcting errors in logic and syntax
Logical errors - prevent app behaving as expected
Syntax errors - typos in code, preventing app from running
Tests for touch-enabled apps
Overall responsiveness and fluidity 
Tapping, pinching, rotating 
Controlled scrolling
Controlled panning 
Ability to disable scrolling and panning
Accuracy of snap points
Unintended zooming or scrolling, especially in multi-touch environment
Proper touch event reaction, specially in multi-touch environment- does exactly what is expected
Requires a touch enabled device to test these

W3C markup & CRR validation service
Checks html and css docs and reports any errors or problems

Empty tags - such as br and hr
Attributes - describe how data should be rendered, provide additional info
Nesting - process of placing an element within another
Entities - Special Chars - aka entity like ‘%’  - start with ‘&….;’ Copyright - &copy;
Doctype declaration - help browser determine which rules it should use for rendering a page
* HTML5 much easier <!DOCTYPE html>
 HTML5 - deprecated some elements <acronym>, <big>, <center> - defined styling of text/content. Use CSS instead

<figure> - specify the type of figure being added
<figcaption> used to add captions before or after images

<audio> - audio
<video> - add video
src - embed or add video or audio content
controls - give control to users to play, stop, change timestamp and audio levels of audio and video elements

Div - create structure
Often includes class/id attribute - use with css

Semantic markup - for organising and structure
Header, footer, nav, section, article, summary, address and aside
Intuitive - easier for web browsers to interpret

