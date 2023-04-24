import { promises as fs } from "fs";
import path from "path";

import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  //Find the absolute path of the json directory
  try {
    const jsonDirectory = path.join(process.cwd(), "json");
    //Read the json data file data.json
    const fileContents = await fs.readFile(
      jsonDirectory + "/projects.json",
      "utf8",
    );
    //Return the content of the data file in json format
    res.status(200).json(JSON.parse(fileContents));
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
