from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    url: str
    date: int
    content: str
    description: str

    @staticmethod
    def build(blog_list):
        dict_blogs = []
        for blog in blog_list:
            blog_convert = list(blog)
            format_obj = {}
            blog_order = ["title", "url", "date", "content", "description"]
            for i in range(len(blog_order)):
                format_obj[blog_order[i]] = blog_convert[i]
            dict_blogs.append(format_obj)
        return dict_blogs
