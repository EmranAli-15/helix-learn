export function CodeEditor(text: string) {
    let updatedText = text;



    // For number
    updatedText = updatedText.replace(/\b\d+(\.\d+)?\b/g,
        '<span class="text-blue-400">$&</span>'
    );



    // For number
    updatedText = updatedText.replace(/-n(.*?)-n/g, (_, text) => {
        return `<span class="text-blue-400">${text}</span>`;
    });



    // For function
    updatedText = updatedText.replace(/-f(.*?)-f/g, (_, text) => {
        return `<span class="text-yellow-400">${text}</span>`;
    });




    // For string
    updatedText = updatedText.replace(/-s(.*?)-s/g, (_, text) => {
        return `<span class="text-green-400">${text}</span>`;
    });



    // For key
    updatedText = updatedText.replace(/-k(.*?)-k/g, (_, text) => {
        return `<span class="text-purple-400">${text}</span>`;
    });



    // For variable
    updatedText = updatedText.replace(/-v(.*?)-v/g, (_, text) => {
        return `<span class="text-red-400">${text}</span>`;
    });

    return updatedText;
}