import {nanoid} from 'nanoid'
import {useState, useEffect} from 'react';
import '../css/searchbox.css'

const generateButton = (repo, descr) => {
  // descr = (descr) ? descr : "<без описания>"
  let projectAuthor = repo.substr(0,repo.indexOf('/'));
  let projectName = repo.substr(repo.indexOf('/')+1);
  return <div className="repoLink" key={nanoid()} onClick={()=>{window.location.href="https://github.com/" + repo}}>
    <div className="repoLinkheadline">
      <span>
        {projectAuthor} / {projectName}
      </span>
    </div>
    <div className="repoLinkP">
      <span>
        {descr}
      </span>
    </div>
  </div>
}
//{width: "fit-content", margin: "8px auto"}
function Tumble({context, setContext}) {
  return <div style={{display: "inline-block"}}> 
    <div className="RoundICO-tumble">
      <div className={context === "https://api.github.com/users/kensoi/repos"? "item" : "item selected"} onClick={() => {setContext("https://api.github.com/users/kensoi/repos")}}>
        kensoi
      </div>
      <div className={context === "https://api.github.com/users/kensoi-archive/repos"? "item" : "item selected"}  onClick={() => {setContext("https://api.github.com/users/kensoi-archive/repos")}}>
        archive
      </div>
    </div>
  </div>
}
function SearchByURL({searchText, url}) {
  let [projectList, setProjectList] = useState([]);
  useEffect(
    ()=>{
      fetch(url).then((response) => response.json()).then(data => setProjectList(data.map(item => {return {full_name: item["full_name"], descr: item["description"]}})))
    }, [url]
  )
  return <div className="ReposList">
    {projectList.filter(
      (item) => item.full_name.toLowerCase().includes(searchText)).map(item => generateButton(item.full_name, item.descr))}
    </div>
  }


export const SearchPage = ({headerState, setHeaderState}) => {
  setHeaderState(true);
  const [searchText, setSearchText] = useState('');
  const [url, setUrl] = useState("https://api.github.com/users/kensoi/repos");

  
  return <div className="app-layout">
      <div className="app-name">
          Поиск репозиториев
      </div>
      <div className="search-box">
        <div className="search-box-label">
          Ввод: 
        </div>
        <div className="search-box-input" contenteditable="true" placeholder="Пример запроса" onInput = {(event) => {
          setSearchText(event.target.innerHTML.toLowerCase())}}>
          
        </div>
        <Tumble context={url} setContext={setUrl}/>
      </div>
      <SearchByURL searchText={searchText} url={url}/>
    </div>
}