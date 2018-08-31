using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Agenda.Global.Enums
{

    [Enumerador(Descricao = "Selecione o Sexo", Nome = "ESexo")]
    public enum ESexo
    {
        [Description("Masculino")]
        Masculino = 0,
        [Description("Feminino")]
        Feminino = 1,

    }
}