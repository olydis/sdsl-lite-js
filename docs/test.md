# Hello

What's up

``` yaml
this: is
some: 42
yaml
 - yes
```

## more stuff

> is that so

## Demo 1

<input id="input1"></input>

| this | is | a | table | test |
|------|----|---|-------|------|
| 1    | 2  | 5 |   6   |   6  |
|   h  | 2 h| 5 | hh6   |   6  |



<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.min.js"></script>
<script>
    require.config({
        paths: {
            "bind": "./lib/bind",
            "jquery": "https://code.jquery.com/jquery-3.2.0.min"
        }
    });
    require(
        ["./bind"],
        () => require(
                ["./lib/index", "jquery"],
                () => require(["test.js"], 
                () => {})),
        () => {});
    var exports = {};
</script>