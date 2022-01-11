export default {
  changeEditorCss: () => {
    let editorElement = document.getElementById('editor');
    editorElement.style.cssText = 'height: 550px';

    let eMaxElement = (document.getElementById('editor-maxmize').innerHTML =
      '_');
    let mEle = document.getElementById('editor-maxmize');
    mEle.style.cssText = 'margin-top: -36px;';
  },
  keepEditorCss: () => {
    const editorElement = document.getElementById('editor');
    editorElement.style.cssText = 'max-height: 550px;';

    const eMaxElement = (document.getElementById('editor-maxmize').innerHTML =
      '❐');
    const mEle = document.getElementById('editor-maxmize');
    mEle.style.cssText =
      'font-size: 1.6em;' +
      'width: 10px;' +
      'height: 10px;' +
      'margin-left: 565px;' +
      'margin-top: -27px;' +
      'cursor: pointer;';
  },
  changePreviewerCss: () => {
    const pMaxElement = (document.getElementById('preview-maxmize').innerHTML =
      '_');
    const ele = document.getElementById('preview-maxmize');
    ele.style.cssText = 'margin-top: -36px;';
  },
  keepPreviewerCss: () => {
    const pMaxElement = (document.getElementById('preview-maxmize').innerHTML =
      '❐');
    const ele = document.getElementById('preview-maxmize');
    ele.style.cssText =
      'font-size: 1.6em;' +
      'width: 10px;' +
      'height: 10px;' +
      'margin-left: 763px;' +
      'margin-top: -27px;' +
      'cursor: pointer;';
  },
};
