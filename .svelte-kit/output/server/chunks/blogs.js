async function getBlog(slug, fetchSvelte) {
  const response = await fetchSvelte(`/blogs/${slug}.md`);
  if (!response.ok) {
    return void 0;
  }
  return response.text();
}
const blogs = [];
function getRecentBlogs(limit = 3) {
  return blogs.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, limit);
}
export {
  getBlog as a,
  blogs as b,
  getRecentBlogs as g
};
