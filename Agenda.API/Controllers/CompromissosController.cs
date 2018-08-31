using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;


namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompromissosController : ControllerBase
    {

        [HttpGet("todos")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.AbreSession())
            {
                string hql = "from Compromisso";
                IQuery query = session.CreateQuery(hql);
                IList<Compromisso> lstCompromissos = query.List<Compromisso>();
                return new JsonResult(lstCompromissos);
            }
        }

        [HttpGet("grid")]
        public JsonResult GetGrid()

        {
            using (ISession session = NHibernateHelper.AbreSession())
            {
                string hql = "CompromissoId, DataHoraInicial, DataHoraFinal, Observacao from Compromisso";
                IQuery query = session.CreateQuery(hql);
                IList<Compromisso> lstCompromissos = query.List<Compromisso>();
                return new JsonResult(lstCompromissos);
            }
        }


    }
}