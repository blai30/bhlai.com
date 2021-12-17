export interface ProjectData {
  title: string
  description: string
  externalUrl?: string
  githubUrl?: string
  thumbnailPath: string
  tags?: string[]
  readMoreRoute?: string
}

const Project = (props: ProjectData & { id: number }) => {
  return (
    <div className="sm:-mx-6 transition ease-in-out bg-zinc-200 dark:bg-zinc-800 shadow-md hover:shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-6">
          <div className="h-full flex flex-col justify-between">
            <div id={`project-${props.id}-upper`}>
              <h3
                id={`project-${props.id}-title`}
                className="mt-0 font-bold text-2xl"
              >
                {props.title}
              </h3>
              <p
                id={`project-${props.id}-description`}
                className="font-light"
              >
                {props.description}
              </p>
              {props.readMoreRoute && (
                <a
                  id={`project-${props.id}-readmore`}
                  href={props.readMoreRoute}
                >
                  Read more
                </a>
              )}
            </div>
            <div id={`project-${props.id}-lower`}>
              <div className="mt-3 flex items-end justify-between">
                <div className="flex flex-wrap space-x-2">
                  {props.tags?.map((tag, index) => (
                    <span
                      key={index}
                      id={`project-${props.id}-tag-${index}`}
                      className="rounded-full py-1 px-2 font-light text-sm bg-zinc-300 dark:bg-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between space-x-3">
                  {props.externalUrl && (
                    <a
                      id={`project-${props.id}-demo`}
                      href={props.externalUrl}
                      title="View or download demo"
                      className="transition ease-in-out transform-gpu hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-link-45deg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                    </a>
                  )}
                  {props.githubUrl && (
                    <a
                      id={`project-${props.id}-github`}
                      href={props.githubUrl}
                      title="Visit GitHub repository"
                      className="transition ease-in-out transform-gpu hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="not-prose">
          <img
            id={`project-${props.id}-thumbnail`}
            src={props.thumbnailPath}
            alt=" Project Thumbnail"
            className="h-full my-0 object-cover object-left-top overflow-hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default Project
