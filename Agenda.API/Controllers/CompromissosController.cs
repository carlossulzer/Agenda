using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompromissosController : ControllerBase
    {

        [HttpGet("GetAll")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                var lstCompromissos = session.Query<Compromisso>().ToList();
                return new JsonResult(lstCompromissos);

            }

        }

        [HttpGet("GetId/{id}")]
        public JsonResult GetId(int id)
        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                return new JsonResult(session.Get<Paciente>(id));
            }
        }



        [HttpGet("Grid")]
        public JsonResult GetGrid()

        {
            using (ISession session = NHibernateHelper.OpenSession())
            {

                var lstCompromissos = session.Query<Compromisso>().ToList()
                                      .Select(x => new { x.CompromissoId, x.DataInicial, x.HoraInicial , x.DataFinal, x.HoraFinal , x.Observacao});

                return new JsonResult(lstCompromissos);
            }
        }





    }
}