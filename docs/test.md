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

<input id="input1">

| loading |
|---------|



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
                        () => require(["test.js"], 
                        () => {})),
                () => {});
        }
    };
    main();
</script>