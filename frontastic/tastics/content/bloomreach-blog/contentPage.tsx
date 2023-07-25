export function ContentPage({ component, page }) {

  const document = page.getDocument();

  const { title, content, introduction } = document.getData();

  console.log(document.getData())

  return (
    <div>
      <h1>{title}</h1>
      <p>{introduction}</p>
      <div dangerouslySetInnerHTML={{ __html: content.value }} />
    </div>
  );
}
