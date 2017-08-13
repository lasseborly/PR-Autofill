chrome.runtime.onMessage.addListener(action => {
    const textArea = document.getElementById('id_description')
    const title = document.getElementById('id_title')

    if (action === 'inject') {

      if (textArea && textArea.value === '') {
        textArea.value =
  `#### What does this PR do?
  #### Where should the reviewer start?
  #### How should this be (manually) tested?
  #### Any background context you want to provide?
  #### What are the relevant tickets? (Optional)
  #### Screenshots (if appropriate)
  #### Questions:
    - `
      }

      if (title && title === '') {
        title.value = 'Feature/'
      }
    }
});