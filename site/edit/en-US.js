const appLocaleData = require('react-intl/locale-data/zh');

module.exports = {
  locale: 'en-US',
  data: appLocaleData,
  messages: {
    'app.common.ok': 'OK',
    'app.common.cancel': 'Cancel',
    'app.common.edit': 'Edit',
    'app.common.add': 'Add',
    'app.common.edit.content': 'Edit content',
    'app.common.all': 'All',
    'app.header.save': 'Save',
    'app.header.save.message': 'Successfully saved.',
    'app.header.save.message.error': 'Save error, please try again.',
    'app.header.preview': 'Preview',
    'app.header.preview.message': 'The build preview was successful.',
    'app.header.download': 'Download',
    'app.header.download.message': 'Generate code successfully.',
    'app.header.publish-cloud': 'Publish',
    'app.header.publish-cloud.button': 'Save and Publish',
    'app.header.publish-cloud.header': 'Release Configuration',
    'app.header.publish-cloud.explain': 'Release Notes',
    'app.header.publish-cloud.remarks': 'We don\'t open the domain name binding function. If there is a requirement, we can leave a message on issues.',
    'app.header.publish-cloud.remarks2': 'It will take about 2 to 3 minutes for the release and deployment. Please wait patiently.',
    'app.header.publish-cloud.meta': 'Page Meta Configuration',
    'app.header.publish-cloud.favicon': 'The icon of the website only supports ico, PNG or jpg. It is recommended to use png.',
    'app.header.publish-cloud.build': 'Your website is being publish. Please wait a moment...',
    'app.header.publish-cloud.state': 'Current State:',
    'app.header.publish-cloud.success': 'Publish Succeeded',
    'app.header.publish-cloud.successRemarks': 'Your website has been publish succeeded, URL:',
    'app.header.publish-cloud.error': 'Publish Error!!!',
    'app.header.edit-data': 'Edit data',
    'app.header.edit-data.header': 'Current edit data',
    'app.header.edit-data.remarks': 'Paste the downloaded JSON here, please don\'t change the data. Please refresh if the data is wrong.',
    'app.header.reset': 'Reset',
    'app.header.edit-data.download': 'Download JSON',
    'app.header.clear-cache': 'Clear cache',
    'app.header.clear-exp': 'Clear all caches and re-read the last saved data from the server;',
    'app.header.new-file.header': 'Recently built',
    'app.header.new-file.message': 'Data has been refreshed.',
    'app.header.new-file.message2': 'Data has been refreshed. Current template is not the template you refreshed. Please switch it yourself.',
    'app.header.edit': 'Edit',
    'app.header.other': 'Other',
    'app.side.add': 'Add content',
    'app.side.encryption': 'Encryption',
    'app.side.decrypt': 'Decrypt',
    'app.side.encryption.remarks': 'After setting the password, editing this page requires a password to edit.',
    'app.side.encryption.remarks2': 'After confirming, please remember to save, otherwise it will be invalid!!!',
    'app.side.encryption.message': 'Encryption is successful, please save.',
    'app.side.decrypt.message': 'Password is successfully deleted, please save it.',
    'app.side.umi-example': 'Umi example',
    'app.side.video-help': 'Video help',
    'app.side.help': 'Help',
    'app.side.lang': '中文',
    'app.other.switch': 'Switch',
    'app.other.point': 'Side button point',
    'app.other.full': 'Full screen scroll',
    'app.other.point.position': 'Position',
    'app.other.point.style': 'Style',
    'app.other.point.type': 'Type',
    'app.other.point.size': 'Size',
    'app.other.full.remark': 'This feature requires saving to generate a preview view.',
    'app.edit.default': 'Please select the left side for editing...',
    'app.edit.style.header': 'Style edit',
    'app.edit.children.header': 'Children edit',
    'app.edit.children.type': 'Type',
    'app.edit.children.remarks': 'Click "+": The last element will be copied.',
    'app.edit.look-api': 'API',
    'app.edit.overpack.appear': 'Appear',
    'app.edit.overpack.appear.remark': 'Whether to open the appear animation.',
    'app.edit.overpack.always': 'Always',
    'app.edit.overpack.always.remark': 'Repeat with scrolling, each time you scroll to the specified area, there will be an animation.',
    'app.edit.overpack.replay': 'Replay',
    'app.edit.overpack.replay.remark': 'When scrolling to playsScale, when scrolling down or up, it will animate, closing it side only when scrolling down.',
    'app.edit.overpack.play-scale': 'Play scale',
    'app.edit.overpack.play-scale.remark': 'The element enters the specified area of ​​the screen to start the animation, 0.5 is the middle of the screen. [enter, leave].',
    'app.edit.banner-anim.type': 'Type',
    'app.edit.banner-anim.type.across': 'Across',
    'app.edit.banner-anim.type.vertical': 'Vertical',
    'app.edit.banner-anim.type.across-overlay': 'Across overlay',
    'app.edit.banner-anim.type.vertical-overlay': 'Vertical overlay',
    'app.edit.banner-anim.type.grid-bar': 'Grid bar',
    'app.edit.banner-anim.type.grid': 'Grid',
    'app.edit.banner-anim.init-show': 'init show',
    'app.edit.banner-anim.auto-play': 'AutoPlay',
    'app.edit.banner-anim.auto-play-speed': 'AutoPlay speed',
    'app.edit.banner-anim.auto-play-speed.remark': 'Auto play time, default is 5000 ms',
    'app.edit.banner-anim.sync': 'Sync play',
    'app.edit.banner-anim.sync.remark': 'Whether to play synchronously with the child animation when sliding.',
    'app.edit.menu.open': 'Open',
    'app.edit.menu.open.remark': 'Only for mobile.',
    'app.edit.row.gutter': 'Gutter',
    'app.edit.col.remark': 'Here is the antd grid layout, please don\'t feel free to change the width of the style below, please modify the grid here',
    'app.edit.col.md': 'Desktop grid',
    'app.edit.col.xs': 'Mobile grid',
    'app.edit.table.size': 'Size',
    'app.edit.table.columns': 'Columns',
    'app.edit.table.dataSource': 'DataSource',
    'app.state.drag': 'Drag here or click the button on the right to change position',
    'app.state.banner.header': 'Manage',
    'app.state.banner.add': 'Add paging',
    'app.state.icon.header': 'Paste the type name of the Icon',
    'app.state.icon.paste': 'Please paste the Icon name',
    'app.state.icon.only-use': 'Can only be used',
    'app.state.image.header': 'Paste image url',
    'app.state.image.placeholder': 'Please paste the image url',
    'app.state.link.header': 'Paste link url',
    'app.state.link.url': 'Link url:',
    'app.state.link.blank': 'Popup page:',
    'app.state.link.type': 'Type:',
    'app.state.link.icon': 'Button Icon:',
    'app.state.link.icon.remarks': 'Only support Ant Design icon.',
    'app.state.menu.header': 'Edit Nav',
    'app.state.menu.edit.link.header': 'Modify link url',
    'app.state.menu.type-link.remark': 'This navigation is Link navigation. Please fill in the following id name in the link;',
    'app.state.menu.type-link.current': 'Current page all IDs:',
    'app.state.texty.header': 'Please enter the text of texty',
    'app.state.video.header': 'Video url',
    'app.state.video.placeholder': 'Please video url',
    'app.state.video.preview': 'Preview image',
    'app.login.title': 'This page is locked. Please enter your password.',
    'app.login.noPassword': 'If you don\'t know the password, please delete current page or create a new page',
    'app.login.new': 'New Page',
  },
};
