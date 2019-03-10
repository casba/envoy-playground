# Envoy Playground

Messing around with envoy, trying out the various filters.

## Rate Limiting

Rate limit based on remote address at a rate defined in `config/ratelimit/config.yaml`. 

Building ratelimit requires installing glide and running `glide install` in the ratelimit directory.

### Test w/ ~70% failure rate at limit of 50/s
```
echo "GET http://localhost/" | vegeta attack -header='Authorization: beareroidj' -rate=75/1s -duration=5s | tee results.bin | vegeta report
```