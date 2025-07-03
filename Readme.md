29/6/25
- started next js
- https://youtu.be/Zq5fmkH0T78?si=FqcyMQpVYFuDqZWK

# Basics
1. Next-js has SSR(server side rendering) as in react empty div are there which get's updated over time, prob for search engine bots and takes more time to
load content, ssr solves all these problem.
2. Rounting -> react req react router for routing but next js has inbuilt folder based routing
3. next is framework(front+back) so we can have backend routes in api folder which is for server, while react is library so only frontend.
4. next js takes care of scaling automatically(by things like code splitting automatically i.e possible in react but req manual setup)

- hmr(hot module replacement), reloads project after edit

# client vs server side rendering
- server componets are fast but if you need component that is dynamic and need to submit form and stuff you need client side rendering, next js by default have ssr.
- to do client side rendering add 'use client' at top of file
- server comp only rendered in server side(so comm only in server logs print)
- client comp server and client, they are prerendered on server side and then hydrated on client side-> everything within client comp that doesn't req client connectivity is rendered on server and then passed code to client with placholder for dymaic things, then browser fills in placeholders(hydrating) making it complete.[server side preredering]
- use client side rendering for interactivity and forms otherwise ssr is fine

| Use Case | Server-Side Rendering (SSR) | Client-Side Rendering (CSR) |
|---|---|---|
| **SEO and discoverability** | Ideal for pages where SEO is important, as the server sends fully rendered HTML to search engines. | Less ideal for SEO, as content is rendered after the initial page load, which may not be fully indexed. |
| **Initial page load speed** | Faster initial page load (FCP - First Contentful Paint, LCP - Largest Contentful Paint) because the browser receives rendered HTML. | Slower initial load, but can be faster for subsequent interactions after the page loads. |
| **Highly interactive applications** | Can be used for interactive elements, but typically requires more complex state management between the server and client. | Ideal for highly interactive applications with frequent updates and user interactions. |
| **Content-heavy pages** | Beneficial for content-heavy pages that need to load quickly and are important for SEO. | Less suitable for content-heavy pages if SEO and initial load speed are critical. |
| **Data fetching** | Can fetch data directly on the server before rendering the page. | Can fetch data, but may require server actions or API routes for data retrieval. |
| **User dashboards and real-time updates** | Can be used, but CSR is generally preferred for real-time interactivity. | Ideal for user dashboards where real-time interactivity and instant navigation are important. |
| **Low-powered devices** | Better performance on low-powered devices as the rendering happens on the server. | May not perform as well on low-powered devices as the client needs to handle the rendering. |



# Routing
- folder based
- folder is url and page.tsx in folder is that route code
### nested folder
    - dashboard/analytics/
    - dashboard/users
    create 2 folder in dashboard folder called analytics and users
### dynamic routes
    - 4 users for each portfolio
    - done usning [id] in folder
    - can be accessed using props.id

### layouts
    - main rendering page, rendering starts from here
    - if you put some text in layout.tsx body then it appears in all pages
    - acts as parent of all components, allows sharing of components across all pages
    - so if you can have stuff like navbar here so appear for all pages
    - also you can have customized layout.tsx for each folder
    - that content in folder layout.tsx for only that folder pages and subpages 
### Route groups
    - if folder struc is dashboard/users but you want url as /users then wrap (dahboard) so only users is seen
    - we can create (root) and put stuff there like about,layout.tsx and page.tsx, del layuot.tsx and page.tsx from outsude of root now 
    - and make another on called (dashboard) where you put other stuff, so you have 2 diff layout , 2 layout don't overlap


# Error handling
    - special file called error.js / ts 
    - we can have one for every folder

