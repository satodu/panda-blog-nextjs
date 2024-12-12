import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody post={
        {
          id: '2',
          title: 'Git Commands You Need to Know - Part 1',
          description: '',
          picture:
            'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/07/29063506/git-1.png',
          slug: '',
          content: (
            <>
              <p>
                Hello Web Developers! Today, I bring you some
                incredibly useful Git commands that everyone
                should know to make their work easier. In this
                first post, we'll cover commands for local
                repositories. In Part 2, we'll dive into
                mastering Remote Repositories. If you’re new to
                Git, check out our post on Getting Started with Git.
              </p>
              <h3>1 - Initializing a Repository</h3>
              <p>
                Every Git repository stores its data in a hidden
                folder called “/.git”. To version files in a
                folder, you need to initialize the repository.
                Simply run the command below:
              </p>
              <h3>2 - Deleting a Repository</h3>
              <p>
                Sometimes, you might want to remove the
                repository information without deleting your
                files—maybe to start fresh with a new repository
                using the same files. To do this, you don’t need
                Git. Remember that a Git repository stores its
                data in a hidden “/.git” folder. Deleting this
                folder will remove the repository from your
                current directory.
              </p>
            </>
          ),
        }
      } />
    </>
  )
}
