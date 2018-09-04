using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Agenda.Negocios.DTO
{
    public class Compromisso
    {

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Compromisso")]
        public virtual int CompromissoId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Observação")]
        public virtual string Observacao { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Data Inicial")]
        public virtual DateTime DataInicial { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Data Final")]
        public virtual DateTime DataFinal { get; set; }


        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Hora Inicial")]
        public virtual string HoraInicial { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Hora Final")]
        public virtual string HoraFinal { get; set; }



        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Paciente")]
        public virtual int PacienteId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Usuário")]
        public virtual int UsuarioId { get; set; }



    }
}
