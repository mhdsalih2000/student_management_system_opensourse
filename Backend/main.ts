
import { ConnectToDataBase } from "./database";
import { logError, logVerbose } from "./utils/console";
import app from "./app";

const PORT = process.env.PORT || 5000;


ConnectToDataBase()
  .then(() => {
    logVerbose("Connected to db succesfully");
    return ;
  })
  .then(() => {
    app.listen(PORT, () => {
      logVerbose(`Server is listening on port ${PORT}`);
    });})
  .catch((err) => {
    logError(`Error : ${err.message}`);
  });

