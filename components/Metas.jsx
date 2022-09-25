function Metas({title, content, keywords}) {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      {/* Meta */}
      <meta
        name="description"
        content={content}
      />
      <meta
        name="keywords"
        content={keywords}
      />

      
    </>
  );
}

export default Metas;
