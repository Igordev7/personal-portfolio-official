import { Col } from "react-bootstrap";

// 1. Receba o "projectUrl" aqui nas props
export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col sm={6} md={4}>
      {/* 2. Envolva a div "proj-imgbx" com um link */}
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        
        {/* Aqui transformamos a área de texto em um link clicável */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          <br/> {/* Uma quebra de linha para separar */}
          
          {/* Botão ou Link para acessar */}
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline', marginTop: '10px', display: 'inline-block'}}>
             See the project
          </a>
        </div>
      </div>
    </Col>
  )
}