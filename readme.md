# This authentication was coded as part of backend project in CodersCamp.

## How to use authentication from this repository.

1. Create your router with routes that have to be private (validate with json token).
2. Use `verify` middleware inside your router.

Use example:

_/yourRouter.js_

```
import { verify } from "./routes/verifyToken.js";

router.get("/", **verify**, (res, req) => {
    res.json({
        message: "Hello, you are succesfully authenticated and can see this content."
    })
})

```
