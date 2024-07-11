import db from "../config/db";

export const uploadImage = async (req, res) => {
  try {
    const { email, oldFileName } = req.body;
    const file = req.files.file;
    const destinationFolder = "../Client/src/assets/images/profilePics";

    // Delete old file if exists
    if (fs.existsSync(path.join(destinationFolder, oldFileName))) {
      fs.unlinkSync(path.join(destinationFolder, oldFileName));
    }

    //Renaming the file according to the current timestamp
    const originalFileName = file.name;
    const timeStamp = Date.now();
    const newFileName = `${timeStamp}_${originalFileName}`;

    // Moving the file to the destination folder
    file.mv(path.join(destinationFolder, newFileName), (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      //Inserting the file name into the database
      db.query(
        "UPDATE User SET image = ? WHERE email = ?",
        [newFileName, email],
        (err, result) => {
          if (err) {
            return res.json(err);
          } else {
            return res.json(newFileName);
          }
        }
      );
    });
  } catch (error) {}
};
