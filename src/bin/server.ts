import { APP } from "../app";
import { ENV } from "../constants";

APP.listen(ENV.PORT, () => {
    console.log(`Server started at ${ENV.PORT}`);
});