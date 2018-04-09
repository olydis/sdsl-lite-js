# __builtin_popcountll is buggy

make sure

```
inline uint64_t bits_impl<T>::cnt(uint64_t x)
```

does not use `__builtin_popcountll`

# Perf Hit of int_vector_buffer

...due to default buffer size of 1MB

``` C++
int_vector_buffer(const std::string  filename,
                  std::ios::openmode mode        = std::ios::in,
                  const uint64_t     buffer_size = 1024 * 1024,   // <-- change to 1024
                  const uint8_t	     int_width   = t_width,
                  const bool         is_plain    = false)
```