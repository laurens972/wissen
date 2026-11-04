import Layout, { useSEO } from '../components/Layout'

// Text 1:1 aus dem App-Repo WissnfuerSchulen, assets/legal/nutzungsbedingungen.md (Version 3.0).
// Ändert sich der Text dort, diese Seite mitziehen; hier nicht eigenständig umformulieren.
export default function NutzungsbedingungenPage() {
  useSEO({
    title: 'Nutzungsbedingungen',
    description: 'Nutzungsbedingungen (AGB) der Lernplattform WISSN der Wissn-AI GbR, Version 3.0.',
  })

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-10">Nutzungsbedingungen</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <p>
              <strong>Stand: 1. Oktober 2026</strong><br />
              <strong>Version: 3.0</strong>
            </p>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Vertragspartner und Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der WISSN-App für iOS und Android (App Store und Google Play), der Web-App unter https://app.wissn-ai.de und aller damit verbundenen Dienste.
              </p>
              <p>
                Anbieter und Vertragspartner ist die
              </p>
              <p>
                Wissn-AI GbR<br />
                vertreten durch die Gesellschafter Laurens Samberg und Felix Maurer<br />
                Eugen-d'Albert-Straße 11<br />
                01640 Coswig<br />
                Deutschland<br />
                E-Mail: info@wissn-ai.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Beschreibung des Dienstes</h2>
              <p>
                WISSN ist eine <strong>KI-gestützte Lernplattform</strong> mit folgenden Funktionen:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>KI-Chat zur Lernunterstützung und sokratischer Modus (die KI führt mit Fragen zum Verständnis)</li>
                <li>Quiz, Karteikarten und Mindmaps</li>
                <li>Lernpläne mit Schwerpunkten und Klassenarbeits-Terminen</li>
                <li>Auswerten hochgeladener Lernmaterialien (zum Beispiel PDF-Dateien und Fotos)</li>
                <li>Sprachnachrichten und Vorlesefunktion</li>
                <li>für Schulen: Klassen- und Fächerverwaltung, Materialien, Klassenarbeits-Ankündigungen, Hilfe-Ruf an Lehrkräfte und eine Lernstandsanzeige für Lehrkräfte</li>
                <li>ein persönlicher Bereich für eigene Fächer und Uploads</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Schulische und private Nutzung</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">3.1 Nutzung über eine Schule</h3>
              <p>
                Treten Sie mit dem Schulpasswort einer Schule bei, nutzen Sie WISSN im Rahmen der Vereinbarung zwischen Ihrer Schule und der Wissn-AI GbR. Für die schulische Nutzung ist Ihre Schule datenschutzrechtlich verantwortlich; wir verarbeiten die Daten in ihrem Auftrag. Die Schule bestimmt, welche Klassen, Fächer und Materialien es gibt und wer welche Rolle hat (Schülerin oder Schüler, Lehrkraft, Schuladministration). Lehrkräfte erhalten ihre Rolle nur mit dem Lehrkräfte-Passwort ihrer Schule.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">3.2 Nutzung ohne Schule und persönlicher Bereich</h3>
              <p>
                Ohne Schulzuordnung und im persönlichen Bereich nutzen Sie WISSN direkt auf Grundlage dieser Nutzungsbedingungen. Verantwortlich für Ihre Daten ist dann die Wissn-AI GbR.
              </p>
              <p>
                Einzelheiten zur Verantwortung und zu Ihren Daten stehen in der Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Alter und Einwilligung der Erziehungsberechtigten</h2>
              <p>
                Wer jünger als 18 Jahre ist, darf WISSN nur mit Einwilligung eines Erziehungsberechtigten nutzen. Bei der Einrichtung eines Schülerkontos fragt die App das Geburtsdatum ab; es wird nur für diese Prüfung verwendet und nicht gespeichert. Ist die Person jünger als 18 Jahre, erhält ein Erziehungsberechtigter eine E-Mail mit einem Bestätigungslink. Bis zur Bestätigung kann das Konto nicht genutzt werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. WICHTIGE HINWEISE ZUR KI-NUTZUNG</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.1 KI-generierte Inhalte</h3>
              <p>
                <strong>ACHTUNG: Die Lerninhalte und Antworten in WISSN werden von künstlicher Intelligenz (Sprachmodelle von Google, Gemini) erzeugt.</strong>
              </p>
              <p>
                <strong>Das bedeutet:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Die KI kann <strong>falsche oder ungenaue Informationen</strong> liefern</li>
                <li>Die KI kann <strong>veraltete Informationen</strong> enthalten</li>
                <li>Die KI kann <strong>Sachverhalte falsch darstellen</strong> oder missverstehen</li>
                <li>Die KI ersetzt <strong>KEINE</strong> Lehrkraft und kein Fachbuch</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.2 Keine Bewertung und keine Noten</h3>
              <p>
                KI-Antworten, Quiz-Auswertungen und die Lernstandsanzeige für Lehrkräfte sind Hilfestellungen. Sie sind <strong>keine Bewertung, keine Note und keine Prüfungsleistung</strong>. WISSN trifft keine automatisierten Entscheidungen über Sie. Was aus einer Lernstandsanzeige folgt, entscheidet allein die Lehrkraft.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.3 Keine Gewährleistung für Richtigkeit</h3>
              <p>
                <strong>Wir übernehmen KEINE Haftung für:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Die inhaltliche Richtigkeit der KI-generierten Inhalte</li>
                <li>Fehler in Erklärungen, Definitionen oder Fakten</li>
                <li>Falsche Antworten in Quizzes</li>
                <li>Unvollständige oder irreführende Mindmaps</li>
                <li>Fehlerhafte Karteikarten</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5.4 Empfehlung zur Nutzung</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li><strong>Nutzen Sie WISSN als Lernhilfe, nicht als einzige Quelle</strong></li>
                <li><strong>Überprüfen Sie wichtige Informationen immer mit Lehrbüchern oder Lehrkräften</strong></li>
                <li><strong>Verlassen Sie sich bei Prüfungen nicht ausschließlich auf KI-generierte Inhalte</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Haftungsausschluss</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">6.1 Beschränkung der Haftung</h3>
              <p>
                Soweit gesetzlich zulässig, haften wir NICHT für:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li><strong>Direkte Schäden</strong> durch Nutzung falscher KI-Informationen</li>
                <li><strong>Indirekte Schäden</strong> wie schlechte Prüfungsergebnisse</li>
                <li><strong>Folgeschäden</strong> aus der Verwendung der App</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">6.2 Ausnahmen</h3>
              <p>
                Die Haftungsbeschränkung gilt NICHT bei:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Vorsatz oder grober Fahrlässigkeit</li>
                <li>Verletzung von Leben, Körper oder Gesundheit</li>
                <li>Verletzung wesentlicher Vertragspflichten</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">6.3 Maximale Haftung</h3>
              <p>
                Unsere Haftung ist auf den Betrag begrenzt, den Sie in den letzten 12 Monaten für WISSN bezahlt haben.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">7. KI-Technologie</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">7.1 Verwendete KI</h3>
              <p>
                WISSN nutzt Sprachmodelle von Google (Gemini) über <strong>Google Cloud Vertex AI</strong>. Die Verarbeitung findet in der EU-Multi-Region statt, also ausschließlich in Mitgliedstaaten der EU.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">7.2 Hinweis nach der KI-Verordnung der EU</h3>
              <p>
                Gemäß Artikel 50 der KI-Verordnung (Verordnung (EU) 2024/1689) informieren wir Sie:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Sie interagieren mit einem <strong>KI-System</strong>, nicht mit einem Menschen</li>
                <li>Die Antworten werden <strong>automatisch erzeugt</strong> und in der App als KI-Inhalt gekennzeichnet</li>
                <li>Die KI hat <strong>kein echtes Verständnis</strong> der Inhalte</li>
              </ul>
              <p>
                Ausnahme: Beim Hilfe-Ruf antwortet eine Lehrkraft mit einer festen Kurzantwort.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">7.3 Datenverarbeitung durch Google</h3>
              <p>
                Bei Nutzung der KI-Funktionen werden Ihre Eingaben, Sprachaufnahmen und Dateiinhalte an Google Cloud Vertex AI in der EU übermittelt. Google verarbeitet sie nur zur Bereitstellung des Dienstes nach den Google-Cloud-Bedingungen einschließlich des Cloud Data Processing Addendum und nutzt Kundendaten nicht zum Training seiner Basismodelle. Einzelheiten stehen in der Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Nutzerverhalten</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">8.1 Erlaubte Nutzung</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Persönliches Lernen</li>
                <li>Unterrichtsvorbereitung (Lehrkräfte)</li>
                <li>Erstellung von Lernmaterialien</li>
              </ul>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">8.2 Verbotene Nutzung</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Hochladen von urheberrechtlich geschützten Materialien ohne Berechtigung</li>
                <li>Missbrauch der KI für nicht-schulische Zwecke</li>
                <li>Weitergabe von Zugangsdaten</li>
                <li>Automatisierte Massenabfragen</li>
                <li>Umgehung von Sicherheitsmaßnahmen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Geistiges Eigentum</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">9.1 Ihre Inhalte</h3>
              <p>
                Sie behalten alle Rechte an Ihren hochgeladenen Materialien.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">9.2 KI-generierte Inhalte</h3>
              <p>
                KI-generierte Inhalte (Mindmaps, Karteikarten, Quiz) dürfen Sie frei für Lernzwecke verwenden.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">9.3 Hinweis bei Veröffentlichung</h3>
              <p>
                Bei Veröffentlichung von KI-generierten Inhalten empfehlen wir den Hinweis: „Erstellt mit WISSN (KI-unterstützt)“
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Kündigung und Kontolöschung</h2>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">10.1 Durch Sie</h3>
              <p>
                Sie können Ihr Konto jederzeit selbst löschen: <strong>Profil → Datenschutz → „Konto löschen“</strong>. Die Löschung erfolgt sofort und ist unwiderruflich. Alternativ können Sie die Löschung per E-Mail an datenschutz@wissn-ai.de von Ihrer registrierten E-Mail-Adresse beantragen; die Bearbeitung erfolgt innerhalb von 30 Tagen. Einzelheiten dazu, was gelöscht wird, finden Sie in der Datenschutzerklärung.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">10.2 Durch uns</h3>
              <p>
                Wir können Konten bei Verstoß gegen diese Bedingungen sperren oder löschen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Änderungen</h2>
              <p>
                Wir können diese Nutzungsbedingungen ändern. Bei wesentlichen Änderungen informieren wir Sie per E-Mail oder in der App und bitten Sie beim nächsten Anmelden erneut um Ihre Zustimmung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Anwendbares Recht</h2>
              <p>
                Es gilt deutsches Recht. Gerichtsstand ist Meißen, sofern gesetzlich zulässig.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Kontakt</h2>
              <p>
                Wissn-AI GbR<br />
                Eugen-d'Albert-Straße 11, 01640 Coswig<br />
                E-Mail: info@wissn-ai.de<br />
                Datenschutz: datenschutz@wissn-ai.de
              </p>
            </div>

            <hr className="border-slate-200" />
            <p>
              <strong>Durch Nutzung von WISSN bestätigen Sie, diese Nutzungsbedingungen gelesen und verstanden zu haben.</strong>
            </p>
            <p>
              Letzte Aktualisierung: 1. Oktober 2026 (Version 3.0: Anbieter Wissn-AI GbR, schulische und private Nutzung, Altersregel, KI über Google Cloud Vertex AI in der EU, keine Benotung durch KI)
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
