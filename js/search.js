function search(input) {
    let elements = document.getElementsByClassName('textBox');
    for (let element of elements) {
        // Reset hidden state
        element.classList.remove('hidden');

        // Function to recursively highlight matches in text nodes
        function highlightTextNodes(node) {
            if (node.nodeType === 3) { // Text node
                let text = node.nodeValue;
                let regex = new RegExp(`(${input})`, 'gi');
                if (regex.test(text)) {
                    let span = document.createElement('span');
                    span.innerHTML = text.replace(regex, '<span style="color:red;">$1</span>');
                    node.replaceWith(...span.childNodes);
                }
            } else if (node.nodeType === 1 && node.childNodes) {
                for (let child of Array.from(node.childNodes)) {
                    highlightTextNodes(child);
                }
            }
        }

        // First reset the original content
        element.innerHTML = element.getAttribute('data-original') || element.innerHTML;
        element.setAttribute('data-original', element.innerHTML);

        // Check if it contains the search term
        if (element.innerText.toLowerCase().includes(input.toLowerCase())) {
            highlightTextNodes(element);
        } else {
            element.classList.add('hidden');
        }
    }
}
