import {whisper} from 'whisper-node-ts';
import * as fs from "fs"
import path from "path"

const filePath = path.join(__dirname,"/sampleoutput/output.wav" )
const stream = fs.createReadStream(filePath)

const options = {
  modelName: "tiny.en",       
  whisperOptions: {
    gen_file_vtt: true,      // outputs .vtt file
  }
}

const trans = async() => {
  const transcript = await whisper(filePath, options);
  console.log("done transcription");
}
export {trans}