
const target = process.env.npm_lifecycle_event;
if (target == 'testdev') {
    //开发测试
    var obj = {
        NODE_ENV: '"production"'
        ,API_ROOT: '"http://192.168.1.101/scm/api/v1"'
        ,TEST_USERNAME: '""'
        ,TEST_PASSWORD: '""'
        ,API_FLAGSTRING: '"-testdev"'
        ,DEMO_MENU: false
        ,IMG_URL: '"http://test.sinter.cn/upload_scloud"'
        ,APP_QRCode : '"http://test.sinter.cn/appchannel/appchannel.html?chid="'
    }
} else if (target == 'test') {
    //测试
    var obj = {
        NODE_ENV: '"production"'
        ,API_ROOT: '"http://test.sinter.cn/scm/api/v1"'
        ,TEST_USERNAME: '""'
        ,TEST_PASSWORD: '""'
        ,API_FLAGSTRING: '"-test"'
        ,DEMO_MENU: false
        ,IMG_URL: '"http://test.sinter.cn/upload_scloud"'
        ,APP_QRCode : '"http://test.sinter.cn/appchannel/appchannel.html?chid="'
    }
} else {
    //线上
    var obj = {
        NODE_ENV: '"production"'
        ,API_ROOT: '"http://sesapi.sinter-cloud.com/scm/api/v1"'
        ,TEST_USERNAME: '""'
        ,TEST_PASSWORD: '""'
        ,API_FLAGSTRING: '""'
        ,DEMO_MENU: false
        ,IMG_URL: '"http://sesimages.sinter-cloud.com/upload_scloud"'
        ,APP_QRCode : '"http://channel.sinter.cn/appchannel.html?chid="'
    }
}

module.exports = obj;
