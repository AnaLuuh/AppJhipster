package testepacote.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Falta.
 */
@Entity
@Table(name = "falta")
public class Falta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "quantidade")
    private Integer quantidade;

    @ManyToOne
    private Aluno aluno;

    @ManyToOne
    private Aula aula;

    @ManyToOne
    private PeriodoLetivo periodoLetivo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Falta quantidade(Integer quantidade) {
        this.quantidade = quantidade;
        return this;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public Falta aluno(Aluno aluno) {
        this.aluno = aluno;
        return this;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Aula getAula() {
        return aula;
    }

    public Falta aula(Aula aula) {
        this.aula = aula;
        return this;
    }

    public void setAula(Aula aula) {
        this.aula = aula;
    }

    public PeriodoLetivo getPeriodoLetivo() {
        return periodoLetivo;
    }

    public Falta periodoLetivo(PeriodoLetivo periodoLetivo) {
        this.periodoLetivo = periodoLetivo;
        return this;
    }

    public void setPeriodoLetivo(PeriodoLetivo periodoLetivo) {
        this.periodoLetivo = periodoLetivo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Falta falta = (Falta) o;
        if (falta.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), falta.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Falta{" +
            "id=" + getId() +
            ", quantidade=" + getQuantidade() +
            "}";
    }
}
