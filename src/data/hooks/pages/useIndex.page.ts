import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
  const posts: BlogPost[] = [
    {
      id: '2',
      title: 'Git Commands You Need to Know - Part 1',
      slug: 'comandos-git',
      description:
        'Master Git by learning commands and tricks that will make your work easier.',
      picture:
        'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/07/29063506/git-1.png',
    },
    {
      id: '1',
      title: '10 NPM Tricks - Do You Know Them All?',
      slug: 'truques-npm',
      description:
        'Discover simple yet powerful tricks you can do with NPM.',
      picture:
        'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/04/23151507/TRUQUES-NPM.png',
    },
  ];
  return { posts };
}
