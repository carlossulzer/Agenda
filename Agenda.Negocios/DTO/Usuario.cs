using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Agenda.Negocios.DTO
{
    public class Usuario
    {
        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código")]
        public virtual int UsuarioId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Nome")]
        public virtual string Nome { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "E-mail")]
        public virtual string Email { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Senha")]
        public virtual string Senha { get; set; }


    }
}
