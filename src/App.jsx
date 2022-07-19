import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            title="Lorem ipsum dolor sit amet"
            author="Oseas Moreto"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet urna nunc. Etiam a feugiat dolor, at rutrum odio. Etiam tincidunt mauris nec diam interdum, in fermentum metus suscipit. Nunc iaculis, lectus sit amet auctor semper, nisl tellus feugiat purus, vitae vulputate libero tortor malesuada sem. Vestibulum luctus, magna et feugiat lacinia, dolor metus convallis nulla, a ornare erat odio vel urna. Suspendisse risus libero, pellentesque ut nunc nec, eleifend convallis nulla. Nulla facilisi. Sed at dapibus nulla. Sed eget lectus urna."
          />
          <Post
            title="Lorem ipsum dolor sit amet"
            author="Alberto Romero"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet urna nunc. Etiam a feugiat dolor, at rutrum odio. Etiam tincidunt mauris nec diam interdum, in fermentum metus suscipit. Nunc iaculis, lectus sit amet auctor semper, nisl tellus feugiat purus, vitae vulputate libero tortor malesuada sem. Vestibulum luctus, magna et feugiat lacinia, dolor metus convallis nulla, a ornare erat odio vel urna. Suspendisse risus libero, pellentesque ut nunc nec, eleifend convallis nulla. Nulla facilisi. Sed at dapibus nulla. Sed eget lectus urna."
          />
        </main>
      </div>
    </div>
  )
}
