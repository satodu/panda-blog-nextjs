import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody post={
        {
          id: '1',
          title: '10 NPM Tricks - Do You Know Them All?',
          description: '',
          picture:
            'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/04/23151507/TRUQUES-NPM.png',
          slug: '',
          content: (
            <>
              <p>
                Greetings Developers! The Node Package Manager (NPM) is a powerful tool that goes beyond just managing dependencies. Many are unaware of the hidden potential within NPM.
              </p>
              <h3>
                1 - Automate Your Workflow with Custom Scripts
              </h3>
              <p>
                NPM allows you to define custom scripts in the package.json file. These scripts can automate repetitive tasks such as testing, building, or deploying your application. It’s as simple as running <code>npm run [script-name]</code>.
              </p>
              <h3>
                2 - Explore Packages with Interactive Search
              </h3>
              <p>
                Did you know you can search for packages directly from the command line? Use <code>npm search [keyword]</code> to quickly find libraries or tools for your project.
              </p>
            </>
          ),
        }
      } />
    </>
  )
}