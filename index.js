var newWindow = window.open("", "_blank", "width=800,height=600");
var prepList = document.getElementsByClassName('recipe__cook-and-prep list list--horizontal')[0].innerHTML;
var ingredients = document.getElementsByClassName('recipe__ingredients')[0].innerHTML;
var steps = document.getElementsByClassName('recipe__method-steps')[0].innerHTML;

var innerHTML = `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/static/styles/css/im-bbcgoodfood-theme/base-75b1bd5f5d5b3464e01d2b58b163e671.css">
<link rel="stylesheet" href="/static/styles/css/im-bbcgoodfood-theme/utilities-49cd78c0eaccb8b34b6da77f9b407ed3.css">
<link rel="stylesheet" href="/static/styles/css/im-bbcgoodfood-theme/components-fae6d5cbdb63e69fd6594b79a7c42376.css">
<style type="text/css">
.tk-corporate-s{font-family:"corporate-s",sans-serif;}
.tk-unit-slab{font-family:"unit-slab",sans-serif;}
svg { display: none; }
</style>

  <title>GoodFood Recipe Extractor</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        }
        .recipe {
        padding: 20px;
        }
        .recipe__title {
        font-size: 24px;
        margin-bottom: 20px;
        }
        .recipe__cook-and-prep {
        margin-bottom: 20px;
        }
        .recipe__ingredients {
        margin-bottom: 20px;
        }
        .recipe__method-steps {
        margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <div class="recipe">
        <h1 class="recipe__title">Recipe</h1>
        <div class="recipe__cook-and-prep">
        ${prepList}
        </div>
        <div class="recipe__ingredients">
        ${ingredients}
        </div>
        <div class="recipe__method-steps">
        ${steps}
        </div>
    </div>
</body>
</html>
`;

newWindow.document.write(innerHTML);

newWindow.document.close();