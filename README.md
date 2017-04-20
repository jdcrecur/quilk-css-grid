# quilk-css-grid

Just a pure CSS grid.

Standard 12 grid layout you find with almost all CSS frameworks that probably started with bootstrap css.

Like bootstrap the classes are the same. Wrap in a container and inner rows leading to columns.

There is only `col-md-(1 to 12)` and `col-sm-(1 to 12)`. The reason for the same class names as bootstrap is to enable you to replace the full bootstrap later if you wanted.
```
<div class="container">
    <div class="row">
        <div class="col-md-4">
        </div>
        
        <div class="col-md-8">
        </div>
    </div>
</div>
```

Checkout the `quilk-css-grid.scss` for more the scss code.

The following variables you can override, and here are their defaults:
```
$container_width: 90% !default;
$width: 96% !default;
$gutter: 4% !default;
$breakpoint-small: 33.75em !default; // 540px
$breakpoint-med: 45em !default; // 720px
$breakpoint-large: 60em !default; // 960px
```