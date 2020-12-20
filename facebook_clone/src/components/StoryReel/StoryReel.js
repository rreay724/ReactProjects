import React from "react";
import "./storyReel.css";
import { Story } from "../index";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images-na.ssl-images-amazon.com/images/I/A1H0bH2AYGL.jpg"
        profileSrc="https://static.wikia.nocookie.net/godofwar/images/e/e8/Norse_Kratos.png/revision/latest?cb=20181207151509"
        title="Kratos"
      />
      <Story
        image="https://cdnb.artstation.com/p/assets/images/images/000/140/333/large/ilya-brovkin-mgs1-2.jpg?1406024993"
        profileSrc="https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1028259-solidsnake.jpg"
        title="Solid Snake"
      />
      <Story
        image="https://cdn.vox-cdn.com/thumbor/HtSKt4xVt-xQ9m5cTxVS5FsYJa0=/cdn.vox-cdn.com/uploads/chorus_asset/file/3695004/The_Witcher_3_Wild_Hunt_The_sirens_may_look_beautiful_in_the_water-but_once_they_re_out_of_it-they_change_into_deadly-flying_creatures..0.jpg"
        profileSrc="https://images.upbeatnews.com/posts/5579/52.jpeg"
        title="Geralt of Rivia"
      />
      <Story
        image="https://animechicago.com/wp-content/uploads/cloud-strife.jpg"
        profileSrc="https://gh.cdn.sewest.net/assets/ident/news/ced9d6cd/18_Event_Cloud-4k13hv40r.jpg?quality=65"
        title="Cloud Strife"
      />
      <Story
        image="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/Spiderman-3-mysterio-plot-spiderverse-.jpg"
        profileSrc="https://i.ytimg.com/vi/PWtacsvAlYo/maxresdefault.jpg"
        title="Peter Parker"
      />
    </div>
  );
}

export default StoryReel;
