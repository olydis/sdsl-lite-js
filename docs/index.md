## Demo 1

<input id="input1">

| loading     |
|-------------|
| please wait |


## Markdown Test Area

``` yaml
this: is
some: 42
yaml
 - yes
```

> markdown stuff



<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.min.js"></script>
<script>
    var exports = {};
    var main = () => {
        if (typeof require === "undefined")
            setTimeout(main, 100);
        else
        {
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
                        () => require(["index.js"], 
                        () => {})),
                () => {});
        }
    };
    main();
</script>