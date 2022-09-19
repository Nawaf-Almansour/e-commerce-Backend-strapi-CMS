import {slugify} from "../../util/stringUtil";


export default {
  beforeCreate(event) {
    console.log(event.params.data)
    const { slug, name } = event.params.data;
    if(!slug && name){
      event.params.data.slug = slugify(name);
    }
  },
};
