interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '奥奥的跑步日记',
  siteUrl: 'https://sawr.gitee.io/running',
  logo: 'https://gitee.com/sawr/personalimage/raw/master/img/微信图片_20230704194922.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: '主页',
      url: 'https://sawr.gitee.io',
    },
    // {
    //   name: 'About',
    //   url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    // },
  ],
};

export default data;
