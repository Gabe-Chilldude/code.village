export default async function component(component, position = 'beforebegin', content = [] ,  element = document.body)
{
    // replaces dots with slashes in component name
    component = component.replace('.', '/');
    component = "../components/" + component + ".html";


    const req = await fetch(component);
    var page = await req.text();

    if(content)
    {       
        content.forEach(function(element, key)
        {
            page = page.replace('{{' + key + '}}', element);
        });
    }

    element.insertAdjacentHTML(position, page);
}
